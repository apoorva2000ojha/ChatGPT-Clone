import { SideMenuItem } from "./SideMenuItem";
// the property of sidemenulist is list of chats
export function SideMenuList(props) {
  //datatype of props is object
  //props is an object containing the ppts of sidemenulist
  //chats is one such ppt
  //chats datatype array
  //map is a method on arrays that returns a new array
  // by taking a function asinput and applying that function
  //to every element of the original array
  // chat datatype if object
  // index datatype Number
  // key, icon and text are properties(props)
  // of sidemenuitem
  return (
    <ul>
      {props.items.map(function (item, index) {
        return <SideMenuItem key={index} icon={item.icon} text={item.text} />;
      })}
    </ul>
  );
}
