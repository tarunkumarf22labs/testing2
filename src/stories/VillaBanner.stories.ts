import type { Meta, StoryObj } from "@storybook/react";
import { VillaBanner } from "./VillaBanner";

const meta: Meta<typeof VillaBanner> = {
  title: "Component/VillaBanner",
  component: VillaBanner,
};

export default meta;
type Story = StoryObj<typeof VillaBanner>;

export const Primary: Story = {
    args: {
        bannerText:"DEJA-VIEW" ,
        bannerTextStyle: "hidden sm:block text-[#F8F8F9] capitalize absolute top-[50%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]",
        bannerImageStyle: "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]",
        VillaImage:'/images/a01.png'
    }
};
