import {
  FaHeart,
  FaImages,
  FaCalendarDays,
  FaFilePen,
  FaComments,
} from "react-icons/fa6";

// Function to add className to icons
const withClassName = (IconComponent) => <IconComponent className="w-5 h-5" />;

const Menu = () => {
  const menuItems = [
    { href: "#home", icon: withClassName(FaHeart) },
    { href: "#DetailAcara", icon: withClassName(FaCalendarDays) },
    { href: "#gallery", icon: withClassName(FaImages) },
    { href: "#kehadiran", icon: withClassName(FaFilePen) },
    { href: "#comment", icon: withClassName(FaComments) },
  ];

  return (
    <ul className="menu fixed menu-horizontal bg-blue-500 text-white rounded-box gap-4">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
