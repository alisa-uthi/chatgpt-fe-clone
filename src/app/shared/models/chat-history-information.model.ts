export interface ChatInformation {
    id: string,
    title: string,
    createdDate: Date,
    messages?: Message[]
}

export interface Message {
    id: string,
    sender: string,
    content: string
}