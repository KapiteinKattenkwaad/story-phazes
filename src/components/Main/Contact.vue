<template>
  <section class="contact" id="contact-section">
    <div class="contact--wrapper">
      <div class="contact__text">
        <h2 class="contact__text__title">
          <span class="contact__text__title--span--am">
            Money
          </span>
          <br class="u-space-desktop">
          <span class="contact__text__title--span--dj">
            Book me
          </span>
          On My Mind
        </h2>
      </div>
    </div>

    <form name="contact" method="POST" data-netlify="true" class="form" id="form">
      <div class="form__group">
        <input type="text" class="form__input" placeholder="Full name *" id="name" name="Full name"
               required>
        <label for="name" class="form__label">Full name *</label>
      </div>

      <div class="u-two-column-wrapper">
        <div class="form__group">
          <input type="email" class="form__input" placeholder="Email address *" name="email" id="email"
                 required>
          <label for="email" class="form__label">Email address *</label>
        </div>

        <div class="form__group">
          <input type="tel" class="form__input" placeholder="Phone number" name="phone" id="phone">
          <label for="phone" class="form__label">Phone Number</label>
        </div>
      </div>

      <div class="u-two-column-wrapper">
        <div class="form__group">
          <input type="text" class="form__input" placeholder="I want a party ..." name="event name"
                 id="name-event">
          <label for="name-event" class="form__label">Your question</label>
        </div>

        <div class="form__group">
          <input type="date" class="form__input" placeholder="Pick a date" name="date" id="date">
          <label for="date" class="form__label">Pick a date</label>
        </div>
      </div>

      <div class="form__group">
        <button class="btn btn--big" type="submit">Send</button>
      </div>
    </form>
  </section>

</template>