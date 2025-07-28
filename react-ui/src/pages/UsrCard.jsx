import React, { useState } from "react";
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { CheckCircle, User, Mail, ArrowLeft, Sparkles } from "lucide-react";

function UserCard({ name, email }) {
    const handleGoBack = () => {
        window.location.reload(); // Simple way to go back to form
    };

    return (
        <div className="w-full max-w-md">
            <Card className="max-w-sm mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                {/* Success Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                        <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome!</h2>
                    <p className="text-green-100">Account created successfully</p>
                </div>

                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5 text-purple-600" />
                        User Profile
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-8">
                    {/* User Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Full Name</p>
                                <p className="text-lg font-semibold text-gray-800">{name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Mail className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Email Address</p>
                                <p className="text-lg font-semibold text-gray-800 break-all">{email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                        <Button 
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get Started
                        </Button>
                        
                        <Button 
                            onClick={handleGoBack}
                            variant="outline" 
                            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg transition-all duration-200"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Create Another Account
                        </Button>
                    </div>

                    {/* Welcome Message */}
                    <div className="text-center pt-4 border-t">
                        <p className="text-sm text-gray-600">
                            🎉 You're all set! Welcome to our community.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserCard