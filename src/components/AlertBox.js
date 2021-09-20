// Styles
import { ErrorBox, ErrorParagraph, ErrorCloseButton  } from '../sc/scAlertBox';

// Icons
import { IconErrorCloseButton } from './icons';


const AlertBox = ({message, messageOpen, setMessageOpen}) => {
    const closeAlertBox = () => {
        setMessageOpen(false);
    };

    return (
        <ErrorBox  openBox={messageOpen ? "true" : "false" }>
            <ErrorParagraph> {message} </ErrorParagraph>
            <ErrorCloseButton onClick = {closeAlertBox}><IconErrorCloseButton /></ErrorCloseButton>
        </ErrorBox>
    )
}

export default AlertBox;
