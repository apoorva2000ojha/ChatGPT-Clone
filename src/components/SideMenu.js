import { NewChat } from "./NewChat";
import { SideMenuList } from "./SideMenuList";

export function SideMenu(props) {
  const chats = [];

  // adding object to array
  chats.push({
    icon: "🗨",
    text: "Lorem ipsum"
  });
  chats.push({
    icon: "🗨",
    text: "dolor sit amet"
  });
  chats.push({
    icon: "🗨",
    text: "Praesent blandit"
  });

  const features = [];

  features.push({
    icon: "&#xf186;",
    text: "Delete conversations"
  });

  return (
    <div>
      <NewChat />
      <SideMenuList items={chats} />
      <hr></hr>
      <SideMenuList items={features} />
    </div>
  );
}
