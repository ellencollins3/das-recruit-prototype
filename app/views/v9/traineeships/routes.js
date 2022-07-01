const express = require('express')
const router = new express.Router()

var _ = require('underscore');
var moment = require('moment');
const cryptoRandomString = require('crypto-random-string');

router.get('/', (req, res) => {
	res.redirect(`/${req.feature}/email`)
})

router.get('*/manage-your-apprentices', function (req, res) {
	res.render('approve/sprint-20/research/provider/manage-your-apprentices/manage-your-apprentices', {
   "query" : req.query,
   }
  )
 })

 router.get('*/manage-your-apprentices-filtered-view', function (req, res) {
	res.render('sprint-9/research/provider-portal/manage-your-apprentices-filtered-view', {
   "query" : req.query,
   }
  )
 })
  



   //Create vacancy - Confirm organisation
   router.post('/v9/traineeships/create/employers-confirm', (req, res) => {
      if(req.session.data['create-vacancy'] == 'yes'){
         res.redirect('/v9/traineeships/create/task-list')
      } else {
         res.redirect('/v9/traineeships/create/employers-select')
      }
   })

  module.exports = router