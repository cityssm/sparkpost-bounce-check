import { config } from './config.js'
import SparkPost from 'sparkpost'

import type { OutputMessage, SparkPost_Events } from './types.js'

const client = new SparkPost(config.sparkPostApiKey)
const events = client.events as SparkPost_Events

const results = await events.searchMessage({
  events: "bounce"
})

const cleanMessages: OutputMessage[] = []

for (const result of results.results) {

  const message = result as SparkPost.MessageEvent

  cleanMessages.push({
    timestamp: message.timestamp,
    message_id: message.message_id,
    rcpt_to: message.rcpt_to,
    subject: message.subject,
    bounce_class: message.bounce_class,
    error_code: message.error_code,
    raw_reason: message.raw_reason
  })
}

console.log(cleanMessages)
