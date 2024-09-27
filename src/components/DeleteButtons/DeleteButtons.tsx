import * as React from 'react';
import './DeleteButtons.css';

interface DeleteButtonsProps {
    onClick: () => void;
}

const DeleteButtons: React.FC<DeleteButtonsProps> = ({ onClick }) => {
    return (
        <div>
            <button className="delete-ingredient-button" type="button" onClick={onClick}>
                Delete
            </button>
        </div>
    );
};

export default DeleteButtons;