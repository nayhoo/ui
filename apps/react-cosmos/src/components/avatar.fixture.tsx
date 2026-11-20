import { typedKeys } from "@/utils/typedKeys";
import { Avatar, AvatarProps } from "@nayhoo/ui/avatar";
import { avatar } from "@nayhoo/ui/theme";

const sizes = typedKeys(avatar.classNames.variants.size);

const AvatarFixture = (props: AvatarProps) => (
  <Avatar
    src="https://static.wikia.nocookie.net/earthbound/images/9/90/Ninten_clay_model.png/revision/latest?cb=20190101193139"
    {...props}
  />
);

export default {
  default: () => <AvatarFixture />,
  fallback: () => <AvatarFixture fallback="N" src={undefined} />,
  inactive: () => <AvatarFixture inactive />,
  interactive: () => <AvatarFixture interactive />,
  round: () => <AvatarFixture round />,
  sizes: () => sizes.map((size) => <AvatarFixture key={size} size={size} />),
};
