import BrainJSClassifier from 'natural-brain';

const classifier = new BrainJSClassifier();

classifier.addDocument('I want to cancel my tv', 'cancel-sky-tv');
classifier.addDocument('I do not want sky tv', 'cancel-sky-tv');

classifier.addDocument('reducing my channels', 'downgrade-sky-tv');
classifier.addDocument('remove a sky tv package', 'downgrade-sky-tv');

classifier.addDocument('my telephone isn\'t working', 'problems-with-sky-talk');
classifier.addDocument('my sky talk doesn\'t work', 'problems-with-sky-talk');

classifier.addDocument('my internet is slow', 'problems-with-sky-broadband');
classifier.addDocument('slow internet speeds', 'problems-with-sky-broadband');
classifier.addDocument('broadband not working', 'problems-with-sky-broadband');

classifier.addDocument('I want to pay my bills', 'bills-payments');
classifier.addDocument('How much do I owe?', 'bills-payments');
classifier.addDocument('how much is my phone bill?', 'bills-payments');

classifier.addDocument('I have bad tv signal', 'problems-with-sky-tv');
classifier.addDocument('my tv is blurry', 'problems-with-sky-tv');
classifier.addDocument('cannot see image', 'problems-with-sky-tv');

classifier.addDocument('I want to check my services', 'about-sky-tv-products-or-services');
classifier.addDocument('would like to check my sky tv products', 'about-sky-tv-products-or-services');

classifier.train();


export default function nlpApi(value) {
  console.log('Response: ',classifier.classify(value));
  return classifier.classify(value);
}






//about-sky-tv-products-or-services
//cancel-sky-broadband
//about-sky-broadband
//join-or-upgrade-sky-tv
//introductory-offers
//about-sky-talk
//change-your-account-details
//sky-wifi
//sky-store
//join-or-upgrade-sky-broadband
//sky-email
//manage-your-devices
//cancel-sky-talk
//sky-viewing-card
//cancel-sky-tv
//moving-sky-talk-or-broadband
//downgrade-sky-tv
//forgotten-username-or-password
//track-your-order
//information-on-sky-tv
//moving-sky-tv-only
//downgrade-sky-broadband
//other-sky-id-queries
//downgrade-sky-talk
//problems-with-sky-tv
//bills-payments
//problems-with-sky-go
//reschedule-your-tv-engineer-appointment
//join-or-upgrade-sky-talk
//your-questions-answered
