export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: "base64",
    name: "Base64 Encode/Decode",
    description: "Easily encode and decode strings to and from Base64 format online. Supports UTF-8 characters.",
    icon: "ri--link-m"
  }
];
