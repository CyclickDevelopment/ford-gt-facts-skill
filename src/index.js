/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample could support multiple lauguages in future by extending the language strings array.
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are inspired by examples at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.63766346-188f-432a-b9b3-118ae5324e5e";

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'The Ford GT is an American mid-engine two-seater sports car',
                'The Ford GT was in production from 2004 to 2006, and again from 2016',
                'The original Ford GT was a consecutive four times winner of the 24 hours of le mans',
                'The Ford GT began as a concept car designed in anticipation of the automaker\'s centennial year and as part of its drive to showcase and revive its \'heritage\' names such as Mustang and Thunderbird.',
                'As the Ford GT was built as part of the company\'s 100th anniversary celebration, the left headlight cluster was designed to read \'100\'.',
                'Like many exotic vehicles, when the Ford GT was first released, the demand outpaced supply, and the cars initially sold for premium prices.',
                'The Ford GT has 4038 reported sales in the U.S.',
                'The Ford GT has a top speed of 205 miles per hour',
                'The Ford GT has a quarter mile time of 11.8 seconds',
                'The latest Ford GT is powered by a newly designed 3.5 liter twin-turbocharged EcoBoost V6 engine making 647 hp.',
                'Ford Chip Ganassi Racing is running 4 factory-supported Ford GTs. Two of these race in the FIA World Endurance Championship.',
                'The latest ford GT has a curb weight of 1385 kilograms',
                'The latest ford GT has a track mode, which lowers the suspension for maximum performance.',
                'In the opening WEC race at Sliverstone, the #67 Ford GT took victory.',
                'On June 19, 2017 the Number 67 Ford GT of Ford Chip Ganassi Racing finished runner up at the 24 Hours of Le Mans in the GTE-Pro class.'
            ],
            SKILL_NAME: 'Ford GT Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'The Ford GT is an American mid-engine two-seater sports car',
                'The Ford GT was in production from 2004 to 2006, and again from 2016',
                'The original Ford GT was a consecutive four times winner of the 24 hours of le mans',
                'The Ford GT began as a concept car designed in anticipation of the automaker\'s centennial year and as part of its drive to showcase and revive its \'heritage\' names such as Mustang and Thunderbird.',
                'As the Ford GT was built as part of the company\'s 100th anniversary celebration, the left headlight cluster was designed to read \'100\'.',
                'Like many exotic vehicles, when the Ford GT was first released, the demand outpaced supply, and the cars initially sold for premium prices.',
                'The Ford GT has 4038 reported sales in the U.S.',
                'The Ford GT has a top speed of 205 miles per hour',
                'The Ford GT has a quarter mile time of 11.8 seconds',
                'The latest Ford GT is powered by a newly designed 3.5 liter twin-turbocharged EcoBoost V6 engine making 647 hp.',
                'Ford Chip Ganassi Racing is running 4 factory-supported Ford GTs. Two of these race in the FIA World Endurance Championship.',
                'The latest ford GT has a curb weight of 1385 kilograms',
                'The latest ford GT has a track mode, which lowers the suspension for maximum performance.',
                'In the opening WEC race at Sliverstone, the #67 Ford GT took victory.',
                'On June 19, 2017 the Number 67 Ford GT of Ford Chip Ganassi Racing finished runner up at the 24 Hours of Le Mans in the GTE-Pro class.'
            ],
            SKILL_NAME: 'Ford GT Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'The Ford GT is an American mid-engine two-seater sports car',
                'The Ford GT was in production from 2004 to 2006, and again from 2016',
                'The original Ford GT was a consecutive four times winner of the 24 hours of le mans',
                'The Ford GT began as a concept car designed in anticipation of the automaker\'s centennial year and as part of its drive to showcase and revive its \'heritage\' names such as Mustang and Thunderbird.',
                'As the Ford GT was built as part of the company\'s 100th anniversary celebration, the left headlight cluster was designed to read \'100\'.',
                'Like many exotic vehicles, when the Ford GT was first released, the demand outpaced supply, and the cars initially sold for premium prices.',
                'The Ford GT has 4038 reported sales in the U.S.',
                'The Ford GT has a top speed of 205 miles per hour',
                'The Ford GT has a quarter mile time of 11.8 seconds',
                'The latest Ford GT is powered by a newly designed 3.5 liter twin-turbocharged EcoBoost V6 engine making 647 hp.',
                'Ford Chip Ganassi Racing is running 4 factory-supported Ford GTs. Two of these race in the FIA World Endurance Championship.',
                'The latest ford GT has a curb weight of 1385 kilograms',
                'The latest ford GT has a track mode, which lowers the suspension for maximum performance.',
                'In the opening WEC race at Sliverstone, the #67 Ford GT took victory.',
                'On June 19, 2017 the Number 67 Ford GT of Ford Chip Ganassi Racing finished runner up at the 24 Hours of Le Mans in the GTE-Pro class.'
            ],
            SKILL_NAME: 'Ford GT Facts',
        },
    }
};

const handlers = {
    'LaunchRequest': () => {
        this.emit('GetFact');
    },
    'GetNewFactIntent': () => {
        this.emit('GetFact');
    },
    'GetFact': () => {

        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': () => {
        
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': () => {
        
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': () => {
        
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
