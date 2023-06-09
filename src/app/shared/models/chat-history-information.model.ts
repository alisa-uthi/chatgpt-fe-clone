export interface ChatHistoryInformation {
    dateText: string,
    chatList: ChatInformation[]
}

export interface ChatInformation {
    id: string,
    title: string,
    messages?: Message[]
}

export interface Message {
    id: string,
    sender: string,
    content: string
}