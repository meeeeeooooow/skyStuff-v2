import { pvLibrary } from "@/config/pvLibrary";
import { pvLayouts } from "@/config/pvConfig";

export default function LiteProfileViewer({ 
  username, 
  profileData,
  uuid
}: { 
  username: string; 
  profileData: any; 
  uuid: string;
}) {
  const currentProfile = profileData.profiles.find((p: any) => p.selected) || profileData.profiles[0];
  const playerData = currentProfile?.members?.[uuid] || {};
  
  const layoutKeys = pvLayouts["default"] || [];
  const categories = Array.from(new Set(layoutKeys.map(key => pvLibrary[key].category)));

  return (
    <div>
      <h1>
        {username} <span>- {currentProfile?.cute_name} (Potato Mode)</span>
      </h1>
      <br /><br />
      
      <div>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <hr />
            <div>
              {layoutKeys.filter(key => pvLibrary[key].category === category).map((key) => {
                const item = pvLibrary[key];
                const rawValue = item.getValue(playerData, currentProfile);
                
                return Array.isArray(rawValue) ? (
                  <div key={key}>
                    <span>{item.name}:</span>
                    {rawValue.length === 0 ? (
                      <span>None</span>
                    ) : (
                      <ul>
                        {rawValue.map((val, idx) => (
                          <li key={idx}>{typeof val === "object" && val !== null ? JSON.stringify(val) : String(val)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div key={key}>
                    <span>{item.name}:</span> 
                    {typeof rawValue === "string" 
                      ? <div dangerouslySetInnerHTML={{ __html: rawValue }} />
                      : typeof rawValue === "number" 
                      ? <span>{new Intl.NumberFormat('en-US').format(rawValue)}</span>
                      : <span>{typeof rawValue === "object" && rawValue !== null ? JSON.stringify(rawValue) : String(rawValue)}</span>}
                  </div>
                );
              })}
            </div>
            <br /><br />
          </div>
        ))}
      </div>
    </div>
  );
}