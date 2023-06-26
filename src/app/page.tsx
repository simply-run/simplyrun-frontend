import Image from 'next/image';
import nextJest from 'next/jest';
import FillButton from '@/components/Buttons/FillButton';
export default function Home() {
  return (
    <div className="test-1">
      <FillButton type="full-rounded">Button Icon</FillButton>
    </div>
  );
}

export const makeApiRequest = async (path: string) => {
  try {
    const resp = await fetch(path);
    if (resp.ok) {
      const result = await resp.json();
      return result;
    }
  } catch (err: any) {
    // handle errors
  }
};
