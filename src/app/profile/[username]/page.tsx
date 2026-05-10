import { getPlayerProfile } from "@/lib/hypixel";
import ProfileDashboard from "@/components/ProfileDashboard";
import LiteProfileViewer from "@/components/LiteProfileViewer";
import { cookies } from "next/headers";

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profileData = await getPlayerProfile(username);

  const cookieStore = await cookies();
  const potatoCookie = cookieStore.get("pv_potato_settings");

  let isPotatoModeActive = false;
  if (potatoCookie) {
    try {
      const parsedSettings = JSON.parse(decodeURIComponent(potatoCookie.value));
      if (parsedSettings && typeof parsedSettings === 'object') {
        if (parsedSettings.scope === 'global') {
          isPotatoModeActive = true;
        } else if (parsedSettings.scope === 'custom' && Array.isArray(parsedSettings.pages)) {
          if (parsedSettings.pages.includes('profile')) {
            isPotatoModeActive = true;
          }
        }
      }
    } catch (error) {
      console.error("Failed to parse potato settings cookie on the server:", error);
    }
  }

  if ("error" in profileData) {
    return (
      <div className="p-8 text-center text-white">
        <h1 className="text-3xl font-bold text-red-400 mb-4">Player Not Found</h1>
        <p className="text-gray-300">{profileData.error}</p>
      </div>
    );
  }

  if (isPotatoModeActive) {
    return <LiteProfileViewer username={username} profileData={profileData} uuid={profileData.uuid} />;
  }

  return (
    <div className="p-8 text-white">
      <ProfileDashboard username={username} profileData={profileData} uuid={profileData.uuid} />
    </div>
  );
}