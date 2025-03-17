const POPUP_WIDTH = 574;
const POPUP_HEIGHT = 574;
const POPUP_X = window.screen.width - POPUP_WIDTH;
const POPUP_Y = 0;

function popout() {
    window.open(
        window.location.href,
        '_blank',
        `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},top=${POPUP_Y},left=${POPUP_X},scrollbars=no,resizable=no`
    );
}

export const PopoutButton = () => {
    return (
        <div className="popout-button">
            <button onClick={() => popout()}>Popout</button>
        </div>
    );
};
