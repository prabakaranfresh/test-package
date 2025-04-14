type Props = {
  children?: React.ReactNode;
  message?: string;
};

type MessageData = {
  intent_meta: {
    summarized_content: string;
  };
  [key: string]: any; // Allow other properties
}

const VirtualAgent = ({ children, message }: Props) => {

  const messageData:MessageData = message ? JSON.parse(message) : null;

  const renderMessage = () => {
    return (<p>{messageData.intent_meta.summarized_content}</p>);
  };

  const renderChildren = () => {
    return (<p>{children}</p>);
  };

  return (
    <>
      <div style={{ 
          border: "1px solid black", 
          padding: "32px", 
          wordBreak: "break-word",
          marginBottom: "16px"}}>
        {messageData?.intent_meta?.summarized_content ? renderMessage() : renderChildren()}
      </div>
      <strong>Rendering from VA-As-A-Service</strong>
    </>
  );
};

export default VirtualAgent;