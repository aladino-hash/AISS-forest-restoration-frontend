import CommonNamesCard from "./profile/CommonNamesCard";
import TaxonomyCard from "./profile/TaxonomyCard";

interface SpeciesProfileProps {
  species?: any;
}

export default function SpeciesProfile({
  species,
}: SpeciesProfileProps) {
  const profile = species?.profile;

  if (!profile) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Species Profile
        </h3>

        <p className="mt-3 text-gray-500">
          Species profile information is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <CommonNamesCard profile={profile} />

      <TaxonomyCard profile={profile} />
    </div>
  );
}