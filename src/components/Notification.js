const Notification = props => {
    return (
        <div className={`notification ${props.modifier}`}>
            <p>{props.title}</p>
            <p>{props.message}</p>
        </div>
    );
}

export default Notification;