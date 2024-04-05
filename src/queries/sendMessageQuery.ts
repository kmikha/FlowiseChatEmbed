import { FileUpload, MessageType } from '@/components/Bot';
import { sendRequest } from '@/utils/index';

export type IncomingInput = {
  question: string;
  history: MessageType[];
  uploads?: FileUpload[];
  overrideConfig?: Record<string, unknown>;
  socketIOClientId?: string;
  chatId?: string;
  fileName?: string; // Only for assistant
};

export type MessageRequest = {
  chatflowid?: string;
  apiHost?: string;
  body?: IncomingInput;
  apiKey?: string;
};

export type FeedbackRatingType = 'THUMBS_UP' | 'THUMBS_DOWN';

export type FeedbackInput = {
  chatId: string;
  messageId: string;
  rating: FeedbackRatingType;
  content?: string;
};

export type CreateFeedbackRequest = {
  chatflowid?: string;
  apiHost?: string;
  body?: FeedbackInput;
  apiKey?: string;
};

export type UpdateFeedbackRequest = {
  id: string;
  apiHost?: string;
  body?: Partial<FeedbackInput>;
  apiKey?: string;
};

export const sendFeedbackQuery = ({ chatflowid, apiHost = 'http://localhost:3000', apiKey, body }: CreateFeedbackRequest) =>
  sendRequest({
    method: 'POST',
    url: `${apiHost}/api/v1/feedback/${chatflowid}`,
    body,
    apiKey,
  });

export const updateFeedbackQuery = ({ id, apiHost = 'http://localhost:3000', apiKey, body }: UpdateFeedbackRequest) =>
  sendRequest({
    method: 'PUT',
    url: `${apiHost}/api/v1/feedback/${id}`,
    body,
    apiKey,
  });

export const sendMessageQuery = ({ chatflowid, apiHost = 'http://localhost:3000', apiKey, body }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/api/v1/prediction/${chatflowid}`,
    body,
    apiKey,
  });

export const getChatbotConfig = ({ chatflowid, apiHost = 'http://localhost:3000', apiKey }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/api/v1/public-chatbotConfig/${chatflowid}`,
    apiKey,
  });

export const isStreamAvailableQuery = ({ chatflowid, apiHost = 'http://localhost:3000', apiKey }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/api/v1/chatflows-streaming/${chatflowid}`,
    apiKey,
  });

export const sendFileDownloadQuery = ({ apiHost = 'http://localhost:3000', body, apiKey }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/api/v1/openai-assistants-file`,
    body,
    type: 'blob',
    apiKey,
  });
