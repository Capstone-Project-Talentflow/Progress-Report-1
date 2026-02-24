import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { ResumeData } from './ResumeBuilder';
import { Info } from 'lucide-react';

interface PersonalInfoFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
  onNext: () => void;
}

export function PersonalInfoForm({ data, onChange, onNext }: PersonalInfoFormProps) {
  const handleChange = (field: keyof ResumeData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-gray-900 mb-2">Fill In Your Personal Information</h2>
          <p className="text-gray-600">Help recruiters to get in touch with you.</p>
        </div>
        <div className="bg-[#ffca1a] text-gray-900 px-3 py-1 rounded flex items-center gap-1.5">
          <Info className="w-4 h-4" />
          <span>TIPS</span>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Naomi Cuerdo"
            className="mt-1.5"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="phone" className="text-gray-700">
              Phone Number (Mobile)
            </Label>
            <Input
              id="phone"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="09345234576"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="naomi@example.com"
              className="mt-1.5"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="linkedin" className="text-gray-700">
            LinkedIn Profile URL
          </Label>
          <Input
            id="linkedin"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="linkedin.com/naomicuerdo"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="portfolio" className="text-gray-700">
            Portfolio/Website URL (Optional)
          </Label>
          <Input
            id="portfolio"
            value={data.portfolio}
            onChange={(e) => handleChange('portfolio', e.target.value)}
            placeholder="www.yourportfolio.com"
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          onClick={onNext}
          className="w-full sm:w-auto bg-[#17960b] hover:bg-[#17960b]/90 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
