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

classifier.train();


export default function nlpApi(value) {
  return classifier.classify(value);
}
