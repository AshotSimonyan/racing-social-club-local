import {Icon} from "../Icons/Icon";

export const Arrow = ({ className, onClick, direction, size = 8, color }) => {
  return (
    <button onClick={onClick} className={className}>
      <span className="arrow-text">{direction}</span>
      <span className="icon-wrapper">
        <Icon name={`arrow-${direction}`} color={color} size={size} />
      </span>
    </button>
  )
}
