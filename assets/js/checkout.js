var stripe = Stripe('pk_live_U2xwsrlYPffCBwDlCj988OUO00cjhcrOSN')

var checkoutButtons = document.getElementById('stripe-checkout')

for (var i = 0; i < checkoutButtons.length; i++) {
  checkoutButtons[i].addEventListener('click', function() {
    var plan = 'plan_F5wdsqE4qJ4LPH' // default plan is monthly
    if (this && this.getAttribute('data-stripe-plan-id')) {
      plan = this.getAttribute('data-stripe-plan-id')
    }

    stripe
      .redirectToCheckout({
        items: [{ plan: plan, quantity: 1 }],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://mailmeteor.com/checkout/success',
        cancelUrl: 'https://mailmeteor.com/checkout/fail'
      })
      .then(function(result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message')
          displayError.textContent = result.error.message
        }
      })
  })
}
