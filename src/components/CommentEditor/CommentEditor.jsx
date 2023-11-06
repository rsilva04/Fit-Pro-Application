import React, { useState } from 'react';
import { Button, TextareaAutosize } from '@mui/material';

const textareaStyle = {
  width: '100%',
  minHeight: '100px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  resize: 'none', // Disable textarea resizing
};

const buttonStyle = {
  marginTop: '8px',
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
    <div>
      <TextareaAutosize
        style={textareaStyle}
        rowsMin={4}
        value={updatedComment}
        onChange={handleCommentChange}
        placeholder="Edit your comment..."
      />
      <Button
        variant="contained"
        color="primary"
        style={buttonStyle}
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
}

export default CommentEditor;
