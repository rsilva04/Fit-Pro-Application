import React, { useState } from 'react';
import { Button, TextareaAutosize } from '@mui/material';

const containerStyle = {
  padding: '16px',
};

const textareaStyle = {
  width: '100%',
  minHeight: '100px',
  padding: '8px',
  border: '1px solid #3f51b5',
  borderRadius: '4px',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
};

const buttonStyle = {
  marginTop: '16px',
  backgroundColor: '#3f51b5',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '12px 16px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#303f9f',
};

function CommentEditor({ initialComment, onSave }) {
  const [updatedComment, setUpdatedComment] = useState(initialComment);

  const handleCommentChange = (e) => {
    setUpdatedComment(e.target.value);
  };

  const handleSave = () => {
    onSave(updatedComment);
  };

  return (
    <div style={containerStyle}>
      <TextareaAutosize
        rowsMin={4}
        value={updatedComment}
        onChange={handleCommentChange}
        placeholder="Edit your comment..."
        style={textareaStyle}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={buttonStyle}
        sx={buttonHoverStyle}
      >
        Save
      </Button>
    </div>
  );
}

export default CommentEditor;

