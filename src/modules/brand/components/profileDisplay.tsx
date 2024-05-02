import TitleComponent from "@modules/home/components/titleComponent";

export interface PersonInfo {
  imageUrl: string;
  fullName: string;
  profession: string;
}
interface ProfileDisplayProps {
  profiles: PersonInfo[];
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profiles }) => {
  return (
    <div className="content-container py-12 sm:py-24 bg-bg w-[1440px]">
    <TitleComponent title="NOTRE EQUIPE"/>
    <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
      {profiles.map((profile, index) => (
        <div key={index} className="text-center p-4">
          <img
            src={profile.imageUrl}
            alt={profile.fullName}
            className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] mx-auto bg-gray-200"
          />
          <h3 className="text-lg mt-2 text-white">{profile.fullName}</h3>
          <p className="text-sm text-gray-400">{profile.profession}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProfileDisplay;
