'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cleanerApplicationSchema, CleanerApplicationInputs } from '@/lib/validation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function CleanerApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CleanerApplicationInputs>({
    resolver: zodResolver(cleanerApplicationSchema),
  });

  const onSubmit = async (data: CleanerApplicationInputs) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/cleaner-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setMessage('Application submitted! We will review and contact you within 48 hours.');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setMessage('Failed to submit application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-inter">{message}</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-inter">{message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            Full Name
          </label>
          <input
            {...register('fullName')}
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+234 816 013 2332"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            State
          </label>
          <select
            {...register('state')}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="">Select state</option>
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
            <option value="port-harcourt">Port Harcourt</option>
          </select>
          {errors.state && (
            <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            Area
          </label>
          <input
            {...register('area')}
            type="text"
            placeholder="Your area"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          {errors.area && (
            <p className="text-red-600 text-sm mt-1">{errors.area.message}</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
            Experience Level
          </label>
          <select
            {...register('experience')}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="">Select experience</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          {errors.experience && (
            <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>
          )}
        </div>
      </div>

      {/* Service Types */}
      <div>
        <label className="block text-sm font-poppins font-semibold text-gray-900 mb-3">
          Service Types (Select at least one)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Home Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Post-Event', 'Move-In/Out', 'Window Cleaning'].map((service) => (
            <label key={service} className="flex items-center space-x-2 cursor-pointer">
              <input
                {...register('serviceTypes')}
                type="checkbox"
                value={service}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="font-inter text-gray-700">{service}</span>
            </label>
          ))}
        </div>
        {errors.serviceTypes && (
          <p className="text-red-600 text-sm mt-1">{errors.serviceTypes.message}</p>
        )}
      </div>

      {/* Own Supplies */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            {...register('ownSupplies')}
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300"
          />
          <span className="font-inter text-gray-700">I have my own cleaning supplies</span>
        </label>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
          About You (Bio)
        </label>
        <textarea
          {...register('bio')}
          placeholder="Tell us about your cleaning experience and why you want to join Charvigne CleanConnect..."
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
        />
        {errors.bio && (
          <p className="text-red-600 text-sm mt-1">{errors.bio.message}</p>
        )}
      </div>

      {/* Referral Source */}
      <div>
        <label className="block text-sm font-poppins font-semibold text-gray-900 mb-2">
          How did you hear about us? (Optional)
        </label>
        <input
          {...register('referralSource')}
          type="text"
          placeholder="Friend, Social Media, Google, etc."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Application</span>
        )}
      </button>

      <p className="text-center text-sm text-gray-600 font-inter">
        We will review your application within 48 hours and contact you via email or phone.
      </p>
    </form>
  );
}
