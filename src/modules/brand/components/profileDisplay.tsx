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
    <div className="content-container py-12 sm:py-24 bg-primary">
      <div className="flex items-center justify-center text-4xl font-bold text-white py-8">
    <span className="px-2 md:items-center text-black">NOTRE EQUIPE</span>
    </div>
    <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
      {profiles.map((profile, index) => (
        <div key={index} className="text-center p-4">
          <img
            src={profile.imageUrl}
            alt={profile.fullName}
            className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] mx-auto bg-gray-300 text-black"
          />
          <h3 className="text-lg mt-2 text-white">{profile.fullName}</h3>
          <p className="text-sm">{profile.profession}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProfileDisplay;
