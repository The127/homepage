import Text from "./Text";

export default function Privacy() {
    return (
        <>
            <div class="container mx-auto flex flex-col p-3">
                <Text class="text-6xl mt-12 mb-6 break-words">
                    Datenschutzerklärung
                </Text>
                <Text class="mb-3">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </Text>
                <Text class="mb-3">
                    Diese Website erhebt keinerlei Daten von Besuchern.
                </Text>
            </div>
        </>
    );
}