'use strict';

/**
 * @ngdoc overview
 * @name stockDogApp
 * @description
 * # stockDogApp
 *
 * Main module of the application.
 */
angular.module('stockDogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pickitup', {
        templateUrl: 'views/pickitup.html',
        controller: 'PickItUpCtrl'
      })
      .when('/product_page', {
        templateUrl: 'views/product_page.html',
        controller: 'productPageCtrl'
      })
      .when('/product_cart', {
        templateUrl: 'views/product_cart.html',
        controller: 'productCartCtrl'
      })
      .when('/product_configure', {
        templateUrl: 'views/product_configure.html',
        controller: 'productConfigCtrl'
      })

      .when('/my_account', {
        templateUrl: 'views/my_account.html',
        controller: 'myAcntCtrl'
      })
      .when('/my_accountAlternate', {
        templateUrl: 'views/my_accountAlternate.html',
        controller: 'myAcntCtrl'
      })

      .when('/my_invoice', {
        templateUrl: 'views/my_invoice.html',
        controller: 'myInvoiceCtrl'
      })

      .when('/contactus', {
        templateUrl: 'views/contact_us.html',
        controller: 'contactCtrl'
      })
      .when('/contactus2', {
        templateUrl: 'views/contact_us2.html',
        controller: 'contactCtrl'
      })

      .when('/order_confirmation', {
        templateUrl: 'views/order_confirmation.html',
        controller: 'orderConCtrl'
      })
      .when('/order_confirmation2', {
        templateUrl: 'views/order_confirmation2.html',
        controller: 'orderConCtrl'
      })
      .when('/order_confirmation_sbmt', {
        templateUrl: 'views/order_confirmation_sbmt.html',
        controller: 'orderConCtrl'
      })
      .when('/order_confirmation_cncl', {
        templateUrl: 'views/order_confirmation_cncl.html',
        controller: 'orderConCtrl'
      })

      .when('/payment_checkout', {
        templateUrl: 'views/payment_checkout.html',
        controller: 'populated_data'
      })
      .when('/payment_checkout2', {
        templateUrl: 'views/payment_checkout2.html',
        controller: 'populated_data'
      })
      .when('/payment_checkout3', {
        templateUrl: 'views/payment_checkout3.html',
        controller: 'populated_data'
      })

      .when('/payment_checkout_alternate', {
        templateUrl: 'views/payment_checkout_alternate.html',
        controller: 'populated_data'
      })
      .when('/payment_checkoutAlternate', {
        templateUrl: 'views/payment_checkoutAlternate.html',
        controller: 'populated_data'
      })

      .when('/invoiceList', {
        templateUrl: 'views/invoiceList.html',
        controller: 'InvoiceListCtrl'
      })
      .when('/invoiceList2', {
        templateUrl: 'views/invoiceList2.html',
        controller: 'InvoiceListCtrl'
      })

      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .when('/invoiceAny', {
        templateUrl: 'views/invoiceAny.html',
        controller: 'InvoiceCtrl'
      })

      .when('/invoice2', {
        templateUrl: 'views/invoice2.html',
        controller: 'InvoiceCtrl'
      })
      .when('/invoice3', {
        templateUrl: 'views/invoice3.html',
        controller: 'InvoiceCtrl'
      })

      .when('/invoiceVoid', {
        templateUrl: 'views/invoiceVoid.html',
        controller: 'InvoiceCtrl'
      })
      .when('/invoiceVdAny', {
        templateUrl: 'views/invoiceVdAny.html',
        controller: 'InvoiceCtrl'
      })

      .when('/invoicePaid', {
        templateUrl: 'views/invoicePaid.html',
        controller: 'InvoicePaidCtrl'
      })
      .when('/invoicePdAny', {
        templateUrl: 'views/invoicePdAny.html',
        controller: 'InvoiceCtrl'
      })

      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
      })
      .when('/search2', {
        templateUrl: 'views/search2.html',
        controller: 'searchCtrl'
      })
      .when('/search_alt1', {
        templateUrl: 'views/search_alt1.html',
        controller: 'searchalt1Ctrl'
      })


      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'populated_data'
      })
      .when('/payment2', {
        templateUrl: 'views/payment2.html',
        controller: 'populated_data'
      })

      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'populated_data'
      })
      .when('/thankyou2', {
        templateUrl: 'views/thankyou2.html',
        controller: 'populated_data'
      })

      .when('/invoice_review', {
        templateUrl: 'views/invoice_review.html',
        controller: 'populated_data'
      })
      .when('/invoice_review2', {
        templateUrl: 'views/invoice_review2.html',
        controller: 'populated_data'
      })

      .when('/terms_services', {
        templateUrl: 'views/terms_services.html',
        controller: 'populated_data'
      })

      //LOGIN
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/account_program', {
        templateUrl: 'views/account_program.html',
        controller: 'account_programCtrl'
      })
      .when('/forgot_password', {
        templateUrl: 'views/forgot_password.html',
        controller: 'forgot_passwordCtrl'
      })

      //Store Home
      .when('/store_home', {
        templateUrl: 'views/store_home.html',
        controller: 'store_homeCtrl'
      })
      .when('/store_home_alternate_2', {
        templateUrl: 'views/store_home_alternate_2.html',
        controller: 'store_home_alternate_2Ctrl'
      })
      .when('/store_home_alternate_3', {
        templateUrl: 'views/store_home_alternate_3.html',
        controller: 'store_home_alternate_3Ctrl'
      })
      .when('/store_home_alternate_4', {
        templateUrl: 'views/store_home_alternate_4.html',
        controller: 'store_home_alternate_4Ctrl'
      })

      .otherwise({
        redirectTo: '/main'
      });
  });
