import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MessageToast from '../components/MessageToast.jsx';

export default function Contact() {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateForm = (step) => {
    setCurrentStep(step);
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
  };

  const closeMessage = () => {
    setMessage(null);
  };

  const validateStep = (step) => {
    const form = formRef.current;
    if (!form) return false;

    const stepElement = form.querySelector(`.form-step[data-step="${step}"]`);
    if (!stepElement) return false;

    const inputs = stepElement.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach((input) => {
      if (input.classList.contains('honeypot')) return;
      if (!input.checkValidity()) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = 'var(--glass-border)';
      }
    });

    return isValid;
  };

  const validateAll = () => {
    const form = formRef.current;
    if (!form) return false;

    let isValid = true;
    form.querySelectorAll('input:not(.honeypot), select').forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
        input.style.borderColor = 'red';
      }
    });

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      updateForm(currentStep + 1);
    }
  };

  const handlePrev = () => {
    updateForm(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateAll()) {
      showMessage('Please ensure all fields are correctly filled.', 'error');
      return;
    }

    const honeypot = formRef.current?.querySelector('.honeypot');
    if (honeypot && honeypot.value !== '') {
      formRef.current.reset();
      updateForm(1);
      return;
    }

    const LIMIT_HOURS = 24;
    const MAX_SUBMISSIONS = 3;
    const storageKey = 'mmr_form_submissions';
    const now = new Date().getTime();

    let submissions = JSON.parse(localStorage.getItem(storageKey) || '[]');
    submissions = submissions.filter((time) => now - time < LIMIT_HOURS * 60 * 60 * 1000);

    if (submissions.length >= MAX_SUBMISSIONS) {
      showMessage('You have reached the maximum number of submissions for today. Please try again later.', 'error');
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS credentials are not fully set in the .env file.');
      showMessage('Email service is not configured yet. Please try again later.', 'error');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        submissions.push(now);
        localStorage.setItem(storageKey, JSON.stringify(submissions));

        showMessage('Application Submitted Successfully! Coach Manohar will contact you soon.', 'success');
        formRef.current.reset();
        updateForm(1);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showMessage('Failed to send the application. Please try again later.', 'error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="text-accent">Start Your Transformation</h1>
            <p>Fill out the application below to apply for 1-on-1 coaching.</p>
          </div>

          <div className="form-container glass-card p-4 p-md-5">
            <div className="form-progress">
              <div className="progress-bar" style={{ width: `${((currentStep - 1) / 2) * 100}%` }}></div>
            </div>

            <form id="coaching-form" className="multi-step-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="website" className="honeypot" tabIndex="-1" autoComplete="off" />

              <div className={`form-step ${currentStep === 1 ? 'active' : ''}`} data-step="1">
                <h3 className="mb-4">Basic Information</h3>
                <div className="form-grid">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" required maxLength="100" />
                  </div>
                  <div className="input-group">
                    <label>Age</label>
                    <input type="number" name="age" placeholder="25" required min="16" max="100" />
                  </div>
                  <div className="input-group">
                    <label>Gender</label>
                    <select name="gender" required>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="+91 0000000000"
                      required
                      pattern="^\+?[0-9]{10,15}$"
                      title="Enter a valid WhatsApp number (10-15 digits), optionally starting with +"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button type="button" className="btn btn-primary next-step" onClick={handleNext}>
                    Next Step <i data-lucide="arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className={`form-step ${currentStep === 2 ? 'active' : ''}`} data-step="2">
                <h3 className="mb-4">Physical Stats</h3>
                <div className="form-grid">
                  <div className="input-group">
                    <label>Height (cm)</label>
                    <input type="number" name="height" placeholder="175" required min="100" max="250" />
                  </div>
                  <div className="input-group">
                    <label>Current Weight (kg)</label>
                    <input type="number" name="weight" placeholder="80" required min="30" max="250" step="0.1" />
                  </div>
                  <div className="input-group">
                    <label>Goal Weight (kg)</label>
                    <input type="number" name="goal_weight" placeholder="75" required min="30" max="250" step="0.1" />
                  </div>
                  <div className="input-group">
                    <label>Occupation</label>
                    <input type="text" name="occupation" placeholder="Software Engineer" maxLength="100" />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button type="button" className="btn btn-outline prev-step" onClick={handlePrev}>
                    <i data-lucide="arrow-left"></i> Back
                  </button>
                  <button type="button" className="btn btn-primary next-step" onClick={handleNext}>
                    Next Step <i data-lucide="arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className={`form-step ${currentStep === 3 ? 'active' : ''}`} data-step="3">
                <h3 className="mb-4">Fitness Goals</h3>
                <div className="form-grid">
                  <div className="input-group">
                    <label>Fitness Goal</label>
                    <select name="goal" required>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="muscle-gain">Muscle Building</option>
                      <option value="recomp">Body Recomposition</option>
                      <option value="strength">Strength Gain</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Training Experience</label>
                    <select name="experience" required>
                      <option value="beginner">Beginner (0-1 yr)</option>
                      <option value="intermediate">Intermediate (1-3 yrs)</option>
                      <option value="advanced">Advanced (3+ yrs)</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Preferred Training</label>
                    <select name="training_type" required>
                      <option value="gym">Gym</option>
                      <option value="home">Home Workout</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Diet Preference</label>
                    <select name="diet" required>
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                      <option value="egg">Eggitarian</option>
                      <option value="vegan">Vegan</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button type="button" className="btn btn-outline prev-step" onClick={handlePrev}>
                    <i data-lucide="arrow-left"></i> Back
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Application'}{' '}
                    <i data-lucide={isSubmitting ? 'loader-2' : 'check'} className={isSubmitting ? 'spin' : ''}></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {message ? (
        <MessageToast message={message.text} type={message.type} onClose={closeMessage} />
      ) : null}
    </>
  );
}
