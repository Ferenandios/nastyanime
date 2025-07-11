export interface Message {
  id: string;
  text: string;
  username: string;
  date: string;
}

export type MessageContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
};
