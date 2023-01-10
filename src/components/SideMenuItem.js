//the property of side menu item is indivual chat
export function SideMenuItem(props) {
  return (
    <li>
      <span>{props.icon}</span>
      <p>{props.text}</p>
    </li>
  );
}
