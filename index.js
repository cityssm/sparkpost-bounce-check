import { config } from './config.js';
import SparkPost from 'sparkpost';
const client = new SparkPost(config.sparkPostApiKey);
const events = client.events;
const results = await events.searchMessage({
    events: "bounce"
});
const cleanMessages = [];
for (const result of results.results) {
    const message = result;
    cleanMessages.push({
        timestamp: message.timestamp,
        message_id: message.message_id,
        rcpt_to: message.rcpt_to,
        subject: message.subject,
        bounce_class: message.bounce_class,
        error_code: message.error_code,
        raw_reason: message.raw_reason
    });
}
console.log(cleanMessages);
