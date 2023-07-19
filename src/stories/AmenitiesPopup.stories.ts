import type { Meta, StoryObj } from '@storybook/react';
import  AmenitiesPopup  from './AmenitiesPopup';

const meta: Meta<typeof AmenitiesPopup> = {
  title: 'Component/AmenitiesPopup',
  component: AmenitiesPopup
};

export default meta;

type Story = StoryObj<typeof AmenitiesPopup>;

export const Default: Story = {
  args: {
    iconsArray: [
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/wifi_high_824f7b47f3.svg",
                "width": 32,
                "height": 32,
                "alt": "wifi-high.svg"
            },
            "text": "High-Speed Internet Access, Wi-Fi Connectivity"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/bathtub_58173dbc24.svg",
                "width": 32,
                "height": 32,
                "alt": "bathtub.svg"
            },
            "text": "Hot Tubs"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/speaker_hifi_627ec5a39b.svg",
                "width": 32,
                "height": 32,
                "alt": "speaker-hifi.svg"
            },
            "text": "Home Theatre Systems"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/cooking_pot_84e1cc6956.svg",
                "width": 32,
                "height": 32,
                "alt": "cooking-pot.svg"
            },
            "text": "Kitchen With Modern Appliances"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/television_simple_23885bb3ee.svg",
                "width": 32,
                "height": 32,
                "alt": "television-simple.svg"
            },
            "text": "Large Flat-Screen TVs"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/armchair_6aa36c976c.svg",
                "width": 32,
                "height": 32,
                "alt": "armchair.svg"
            },
            "text": "Plush Sofas"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/barbell_95dd92d6c9.svg",
                "width": 32,
                "height": 32,
                "alt": "barbell.svg"
            },
            "text": "Private Gyms"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/swimming_pool_b089da4c20.svg",
                "width": 32,
                "height": 32,
                "alt": "swimming-pool.svg"
            },
            "text": "Private pool"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/bed_a88f743018.svg",
                "width": 32,
                "height": 32,
                "alt": "bed.svg"
            },
            "text": "Single Bed"
        },
        {
            "image": {
                "image": "https://luxunlockdev.s3.ap-south-1.amazonaws.com/thermometer_e5d70a7d7d.svg",
                "width": 32,
                "height": 32,
                "alt": "thermometer.svg"
            },
            "text": "Steam Rooms"
        }
    ],
    hidePopup: function(){}
  }
};
