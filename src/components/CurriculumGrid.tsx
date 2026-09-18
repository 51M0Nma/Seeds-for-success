import React from 'react';
import {
  TrendingUp,
  UserCheck,
  Gem,
  Coins,
  Car,
  CreditCard,
  Calculator,
  Building2,
  Wallet,
  Receipt,
  Home,
  ShieldCheck
} from 'lucide-react';
import { CurriculumModule } from '../types';

interface CurriculumGridProps {
  modules: CurriculumModule[];
}

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  UserCheck,
  Gem,
  Coins,
  Car,
  CreditCard,
  Calculator,
  Building2,
  Wallet,
  Receipt,
  Home,
  ShieldCheck
};

export const CurriculumGrid: React.FC<CurriculumGridProps> = ({ modules }) => {
  return (
    <div id="curriculum-modules-grid" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {modules.map((item, index) => {
        const IconComponent = iconMap[item.iconName] || TrendingUp;
        return (
          <div key={item.id} id={`curriculum-item-${index + 1}`} className="flex items-start gap-4 group">
            {/* Custom line art icon with dark teal tone */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-[#246355] flex items-center justify-center group-hover:bg-[#246355] group-hover:text-white transition-colors duration-200">
              <IconComponent className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#23a976] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
