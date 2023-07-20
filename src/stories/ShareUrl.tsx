import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  InstagramIcon
} from 'next-share';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IShareUrl {
  url: string;
  setShowShareModal: React.Dispatch<React.SetStateAction<boolean>>;
  showShareModal: Boolean;
}

const ShareUrl = ({ url, setShowShareModal, showShareModal }: IShareUrl) => {
  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-20 ease-in-out z-[500] rounded-3xl">
      <div
        className="fixed top-0 left-0 z-0 w-full h-screen"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={() => {
          setShowShareModal(!showShareModal);
        }}
      ></div>
      <div className="w-full h-[100vh] flex justify-center items-center z-50">
        <div className="w-11/12 sm:w-[450px] h-auto m-auto bg-white rounded-md p-5 border-2 shadow-2xl relative">
          <button
            className="absolute top-2 right-[3%]"
            onClick={() => {
              setShowShareModal(!showShareModal);
            }}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          <div className="flex flex-wrap items-center justify-between flex-grow p-5">
            <FacebookShareButton
              url={url}
              quote={
                'next-share is a social media share buttons for your next React apps.'
              }
              hashtag={'#nextshare'}
            >
              <FacebookIcon size={60} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url={url}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
              separator=":: "
            >
              <WhatsappIcon size={60} round />
            </WhatsappShareButton>
            <TwitterShareButton
              url={url}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
            >
              <TwitterIcon size={60} round />
            </TwitterShareButton>
            <FacebookMessengerShareButton url={url} appId={''}>
              <FacebookMessengerIcon size={60} round />
            </FacebookMessengerShareButton>
            <EmailShareButton url={url} subject={'Next Share'} body="body">
              <EmailIcon size={60} round />
            </EmailShareButton>
          </div>
          <div className="flex justify-between p-5">
            <div className="w-4/5 p-1 text-gray-400 border-2 rounded-lg">
              {url}
            </div>
            <button
              className="w-[22%] -ml-4 border-2 rounded-lg bg-[#8A1E61] text-white text-md font-bold p-[5px]"
              onClick={() => {
                navigator.clipboard.writeText(url);
              }}
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareUrl;
// rounded-l-none
