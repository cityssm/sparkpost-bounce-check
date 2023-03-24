import type SparkPost from 'sparkpost'

export interface Config {
  sparkPostApiKey: string
}

export interface OutputMessage {
  timestamp: string
  message_id: string
  rcpt_to: string
  subject: string
  bounce_class: string
  error_code: string
  raw_reason: string
}

interface SearchMessageOptions {
  events: 'bounce'
}

export interface SparkPost_Events {
  searchMessage: (
    options: SearchMessageOptions
  ) => Promise<{ results: SparkPost.MessageEvent[] }>
}
