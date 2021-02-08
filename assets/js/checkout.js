var stripe = Stripe('pk_test_QZCJhmkpR03mAot2XsRUs0qM00B4gZtUh8')

var checkoutButtons = document.getElementsByClassName('stripe-checkout')

for (var i = 0; i < checkoutButtons.length; i++) {
  checkoutButtons[i].addEventListener('click', function () {
    var plan = 'price_1HPMJIKALIjZusuQZjuI5Xop' // default plan is monthly
    if (this && this.getAttribute('data-stripe-plan-id')) {
      plan = this.getAttribute('data-stripe-plan-id')
    }

    stripe
      .redirectToCheckout({
        items: [{ plan: plan, quantity: 1 }],
        successUrl: 'https://mailmeteor.com/checkout/success',
        cancelUrl: 'https://mailmeteor.com/checkout/fail',
        allowIncompleteSubscriptions: true
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message')
          displayError.textContent = result.error.message
        }
      })
  })
}
