import { Brush, ChartLine, Files, MessageSquare, Smartphone, SquareUser } from "lucide-react";

import Card from "../../components/Card/Card";
import Zoho from "../../components/Icons/Zoho/Zoho";

const Work = () => {
  return (
    <div className="mx-60 my-32">
      <h4 className="text-xl font-bold">Work</h4>
      <h5 className="text-lg font-normal mt-2">Delivered features</h5>
      <h5 className="mt-20 ml-5 text-md font-normal">Backend</h5>
      <div className="flex flex-wrap justify-center w-full gap-4">
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <ChartLine className="mr-5" />
              <h5>Dashboard Analytics</h5>
              <p hidden>
                - Added Dashboard Analytics API - Added option CSV export
                - Add link to SlotXpert
              </p>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <Smartphone className="mr-5" />
              <h5>Mobile Notification with Firebase</h5>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <Zoho />
              <h5 className="ml-5">Zoho API Integration</h5>
              <p hidden>
                - Added feature to unzip compressed files to get individual pdf
                potential employee data and upload to Zoho
                - Zoho Deluge WorkFlow
                - Add bwsala link
              </p>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <MessageSquare className="mr-5" />
              <h5>Chat Feature Improvement</h5>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <Files className="mr-5" />
              <h5>Report Generation Improvement</h5>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <ChartLine className="mr-5" />
              <h5>Dashboard Analytics</h5>
            </div>
          }
        />
      </div>
      <h5 className="mt-20 ml-5 font-normal">Frontend</h5>
      <div className="flex flex-wrap justify-center w-full gap-4">
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <SquareUser className="mr-5" />
              <h5>Virtual Background</h5>
            </div>
          }
        />
        <Card
          cardClassName="w-1/4"
          cardBody={
            <div className="flex">
              <Brush className="mr-5" />
              <h5>UI Design Enhancements</h5>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Work;
