// eslint-disable-next-line import/no-anonymous-default-export
export default {
    REFRESH_TOKEN: `refresh_token`,
    SIGN_IN: `signin/`,
    SIGN_UP: `signup/`,
    GET_USER: `user/`,
    FORGOT_PASSWORD: `forgot_password`,
    UPDATE_PROFILE: `user/update`,
    UPDATE_PHOTO: `user/update/photo`,
    RESET_PASSWORD: (token) => `reset_password/${token}`,
    CHANGE_PASSWORD: `update_password`,
    SEND_MESSAGE: (chatbotId) => `chatbot/chat/${chatbotId}`,
    SEND_MESSAGE_ALPHA: (chatbotId) => `chatbot/chat/alpha/${chatbotId}`,
    BOT_RESOURCE: `chatbot`,
    REQUEST_BOT: `bot_requests`,
    BOT_ADD: `chatbot/category/add`,
    BOT_DELETE: `chat/category/delete`,
    BOT_CALL: `chat/conversation/bot`,
    BOT_CONFIG: (chatbotId) => `chatbot/configs/${chatbotId}`,
    BOT_FILE_UPLOAD: (chatbotId) => `chatbots/${chatbotId}/upload`,
    BOT_FILES: (chatbotId) => `chatbots/${chatbotId}/files`,
    BOT_MY_ASSISTANTS: `chatbot/myassistants`,
    FILES_EMBED: (chatbotId) => `chatbots/${chatbotId}/embed`,
    TOOLS: (chatbotId) => `chatbots/${chatbotId}/tools`,
    TOPIC_LIST: (chatbotId, userId) => `topics/${chatbotId}/${userId}`,
    TOPIC_RESOURCE: (topicId) => `topics/${topicId}`,
    TOPIC_CONVO: (topicId) => `topics/${topicId}/messages`,
    DEL_CONVO: (chatbotID) => `topics/chatbot/${chatbotID}/playground/messages`,
    LLM_LIST: `llms`,
    ROADMAPS: `roadmaps`,
    SUPERVISOR: `supervisor-feedback/`,
    PUBLIC_BOT: `apps/service/agent`,
    CREATE_FEEDBACK: `apps/feedback/create`,
    TOPIC_FEEDBACK: (topicId) => `topics/${topicId}/feedbacks`,
    USER_LOCATION: (lat, lang) => `user/location/${lat}/${lang}`,
};
