import { FileUpload, MessageType } from '@/components/Bot';
export type IncomingInput = {
    question: string;
    history: MessageType[];
    uploads?: FileUpload[];
    overrideConfig?: Record<string, unknown>;
    socketIOClientId?: string;
    chatId?: string;
    fileName?: string;
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
export declare const sendFeedbackQuery: ({ chatflowid, apiHost, apiKey, body }: CreateFeedbackRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
export declare const updateFeedbackQuery: ({ id, apiHost, apiKey, body }: UpdateFeedbackRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
export declare const sendMessageQuery: ({ chatflowid, apiHost, apiKey, body }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getChatbotConfig: ({ chatflowid, apiHost, apiKey }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const isStreamAvailableQuery: ({ chatflowid, apiHost, apiKey }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const sendFileDownloadQuery: ({ apiHost, body, apiKey }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
//# sourceMappingURL=sendMessageQuery.d.ts.map