define(["lib/key-mirror"],function(e){return{ActionTypes:e({PLACE_BET:null,PLACE_BET_SUCCESS:null,PLACE_BET_ERROR:null,CANCEL_BET:null,CASH_OUT:null,SAY_CHAT:null,RUN_STRATEGY:null,STOP_SCRIPT:null,UPDATE_SCRIPT:null,SELECT_STRATEGY:null,SET_WIDGET_STATE:null,SELECT_TAB:null,SET_BET_SIZE:null,SET_AUTO_CASH_OUT:null,SET_CHAT_INPUT_TEXT:null,SET_CHAT_HEIGHT:null}),PayloadSources:e({VIEW_ACTION:null}),Engine:{STOP_PREDICTING_LAPSE:300,HOST:window.document.location.host==="www.moneypot.com"?"https://g2.moneypot.com":window.document.location.host.replace(/:3841$/,":3842"),MAX_BET:1e8},BetButton:{INITIAL_DISABLE_TIME:500},Chat:{MAX_LENGTH:500}}});