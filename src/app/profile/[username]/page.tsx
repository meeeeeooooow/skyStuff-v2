import { getPlayerProfile } from "@/lib/hypixel";
import ProfileDashboard from "@/components/ProfileDashboard";

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profileData = await getPlayerProfile(username);

  // Handle the case where the API returns an error
  if ("error" in profileData) {
    return (
      <div className="p-8 text-center text-white">
        <h1 className="text-3xl font-bold text-red-400 mb-4">Player Not Found</h1>
        <p className="text-gray-300">{profileData.error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <ProfileDashboard username={username} profileData={profileData} uuid={profileData.uuid} />
    </div>
  );
}