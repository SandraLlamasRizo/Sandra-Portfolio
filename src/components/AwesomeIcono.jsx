import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AwesomeIcon({icon, size = '', color='black'}) {

    return <FontAwesomeIcon icon={icon} size={size} color={color } />
}

export default AwesomeIcon;