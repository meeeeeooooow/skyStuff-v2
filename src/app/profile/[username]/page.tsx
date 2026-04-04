import { getPlayerProfile } from "@/lib/hypixel";
import ProfileHeader from "@/components/ProfileHeader";

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
      <ProfileHeader username={username} profiles={profileData.profiles} />
      <pre className="bg-gray-900 p-6 rounded-xl overflow-x-auto text-sm text-gray-300 border border-gray-800">
        {JSON.stringify(profileData, null, 2)}
      </pre>
    </div>
  );
}