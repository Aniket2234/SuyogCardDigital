import ServiceCard from '../ServiceCard';
import { Building2 } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard
        icon={Building2}
        title="Private Limited Company Registration"
        onClick={() => console.log('Service clicked')}
      />
    </div>
  );
}
