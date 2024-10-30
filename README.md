# New Born Name Finder

The **New Born Name Finder** is an app designed to help parents find the perfect name for their newborn child. By providing preferences such as gender, origin, and meaning, the app generates a list of personalized name suggestions.

## How to Use the App

1. **Launch the App**: Open the New Born Name Finder app on your device.

2. **Fill in Your Preferences**:
   - **Gender**: Select the gender of your child from the dropdown menu. Options are:
     - **Any**: If you want names suitable for any gender.
     - **Boy**: For male names.
     - **Girl**: For female names.
   - **Origin**: Enter the cultural or linguistic origin you'd like the names to be from (e.g., Hebrew, Latin, Japanese). This field is optional.
   - **Meaning**: Specify any particular meaning you'd like the names to have (e.g., strength, joy, wisdom). This field is optional.

3. **Generate Names**:
   - Click the **Generate Names** button.
   - The app will process your preferences and generate a list of 10 name suggestions tailored to your inputs.
   - A loading indicator will display while the names are being generated.

4. **View Suggestions**:
   - After processing, the **Name Suggestions** section will appear below the form.
   - Review the list of suggested names.
   - If you're not satisfied or want more options, you can adjust your preferences and generate new names.

5. **Responsive Design**:
   - The app is designed to be responsive and user-friendly on all devices, whether you're on a desktop, tablet, or smartphone.

## Example User Journey

- **User A** wants a name for their baby girl that means "light" and prefers names of Greek origin.
  - They select **Girl** as the gender.
  - They enter **Greek** in the origin field.
  - They type **light** in the meaning field.
  - They click **Generate Names**.
  - The app presents a list of names like **Eleni**, **Phoebe**, **Thea**, etc.

- **User B** is looking for unisex names without any specific origin or meaning.
  - They select **Any** for gender.
  - They leave the origin and meaning fields empty.
  - They click **Generate Names**.
  - The app suggests a variety of popular unisex names.

## Notes

- Feel free to use any combination of preferences. The more specific you are, the more tailored the suggestions will be.
- The app does not require any sign-in or authentication to use.
- All features are free to use.

## External Services Used

- **ZAPT AI**: The app uses ZAPT's backend services to generate name suggestions based on your inputs.

## Environment Variables

The following environment variables are required for the app to function correctly:

- `VITE_PUBLIC_APP_ID`: Your ZAPT app ID.
- `VITE_PUBLIC_SENTRY_DSN`: Your Sentry Data Source Name for error logging.
- `VITE_PUBLIC_APP_ENV`: The environment (e.g., 'development', 'production').

Note: These variables should be set in a `.env` file at the root of your project.
